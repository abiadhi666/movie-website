import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Container,
    Spinner,
  } from "reactstrap";
import { getMoviesList } from "../actions/movieAction";

const mapStateToProps = (state) =>{
  return{
    getMoviesList: state.movies.getMoviesList,
    errorMoviesList: state.movies.errorMoviesList
  }
}

class HomeContainer extends Component {
  componentDidMount(){
    this.props.dispatch(getMoviesList());
  }
  
  constructor() {
    super();

    this.state = {
      search: null,
    }
  }

  searchSpace = (e) => {
    let keyword = e.target.value;
    this.setState({ search: keyword });
  };

  render(props) {
    return (
        <Container>
          { this.props.getMoviesList ? 
            <div>
              <input
              id="#search"
              type="text"
              placeholder="Search movies title or year. . ."
              onChange={(e) => this.searchSpace(e)}
              className="searchbox" 
              />
              <div className="grid">
              {
              this.props.getMoviesList
              .filter((data) => {
                if (this.state.search == null) return data;
                else if (
                  data.showTime.toLowerCase().includes(this.state.search.toLowerCase())
                ) {
                  return data;
                } else if (
                  data.title.toLowerCase().includes(this.state.search.toLowerCase())
                ) {
                  return data;
                }
              }).map((data) => {
                return (
                  <Card className="card">
                    <CardImg
                      top
                      width="100%"
                      src={data.image}
                      alt="Card image cap"
                    />
                    <CardBody>
                      <CardTitle tag="h5">{data.title}</CardTitle>
                      {/* <CardSubtitle tag="h6" className="mb-2 text-muted">
                        {data.showTime}
                      </CardSubtitle> */}
                      <CardText></CardText>
                      <Link className="card-link" to={"/"+data.id}>
                        <CardText>Detail</CardText>
                      </Link>
                    </CardBody>
                  </Card>
                )
              })
              }
              </div>
            </div>
          : 
          <div className="text-center">
            {this.props.errorMoviesList ? <h2>{this.props.errorMoviesList}</h2> : <Spinner color="dark" />}
          </div>
          }
        </Container>
    );
  }
}

export default connect(mapStateToProps, null)(HomeContainer);