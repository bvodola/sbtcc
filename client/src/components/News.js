import React from 'react';
import axios from 'axios';
import CardItem from './CardItem'
import container from '../helpers/container';
import { Icon } from '../helpers/';
import { colors } from '../helpers/theme';

import Button from 'material-ui/Button';
import Dialog from 'material-ui/Dialog';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import Slide from 'material-ui/transitions/Slide';

const style = {
  getMoreNewsButton: {
    backgroundColor: colors.main1,
    width: '100%',
    marginTop: '16px',
  }
}

class NewsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      news: []
    };
  }

  getNews(page=0, cb=() => {}) {
    const limit = String(page*10)+',10';
    console.log('limit',limit);

    axios.get('http://localhost:3000/api/news/recent/limit:'+limit+'/')
      .then((response) => {
        const news = [ ...this.state.news , ...response.data ];
        const newsAdded = this.state.news.length < news.length;
        this.setState({ news }, () => {
          cb(newsAdded);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentDidMount() {
    this.getNews();
  }

  render() {
    return(
      <News {...this.props} {...this.state} getNews={(page, cb) => this.getNews(page, cb)} />
    )
  }
};

class News extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isNewsDialogOpened: false,
      showGetMoreNewsButton: true,
      selectedArticle: {},
      nextPage: 1
    }
  }

  openNewsDialog(id) {
    const { news } = this.props;
    let selectedArticle = news.find((v,i) => {
      if(v.NoticiaID === id) {
        return true;
      } else {
        return false;
      }
    });
    const regex = new RegExp('src="/uploads/','g');
    selectedArticle.not_conteudo = selectedArticle.not_conteudo.replace(regex,'src="http://www.sbtcc.org.br/uploads/');

    this.setState({
      selectedArticle,
      isNewsDialogOpened: true
    });
  }

  closeNewsDialog() {
    this.setState({
      selectedArticle: {},
      isNewsDialogOpened: false,
    });
  }

  handleGetMoreNews() {
    let { nextPage } = this.state;
    this.props.getNews(nextPage, (newsAdded) => {
      if(newsAdded) {
        this.setState({nextPage: nextPage+1});
      } else {
        this.setState({showGetMoreNewsButton: false});
      }

    });

  }

  render() {
    const { news } = this.props;
    const { selectedArticle, showGetMoreNewsButton, isNewsDialogOpened, nextPage } = this.state;

    return(
      <div className="NewsComponent">
        {news.map((n,i) => (
          <CardItem
            key={n.NoticiaID}
            title={n.not_nome}
            subheader={(new Date(n.not_data)).toLocaleDateString('pt-BR', {day: 'numeric', month: 'long', year: 'numeric'})}
            image={'http://sbtcc.org.br/arquivos/noticias/'+n.not_img}
            content={n.not_resumo}
            cardActions={
              <Button dense color="primary" onClick={() => this.openNewsDialog(n.NoticiaID)}>
                Ler Notícia
              </Button>
            }
          />
        ))}

        {showGetMoreNewsButton?
          <Button style={style.getMoreNewsButton} raised color="primary" onClick={() => this.handleGetMoreNews()}>
            Carregar Mais
          </Button>
        :''}


        <Dialog
          fullScreen
          open={isNewsDialogOpened}
          onRequestClose={() => this.closeNewsDialog()}
          transition={<Slide direction="up" />}
        >
          <AppBar>
            <Toolbar>
              <IconButton color="contrast" onClick={() => this.closeNewsDialog()} aria-label="Close">
                <Icon>close</Icon>
              </IconButton>
              <Typography type="title" color="inherit">
                {(new Date(selectedArticle.not_data)).toLocaleDateString('pt-BR', {day: 'numeric', month: 'long', year: 'numeric'})}
              </Typography>
            </Toolbar>
          </AppBar>

          <div style={{margin: '70px 16px 16px 16px', overflow: 'scroll'}}>
            <Typography type='title'>
              {selectedArticle.not_nome}
            </Typography>
            <Typography>
              <span dangerouslySetInnerHTML={{ __html: selectedArticle.not_conteudo}}></span>
            </Typography>
          </div>

        </Dialog>

      </div>
    );
  }
}



export default NewsContainer;
