import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { connect } from 'react-redux'
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
  } from "reactstrap";

const mapStateToProps = (state) =>{
  return{
    getMoviesDetail: state.movies.getMoviesDetail,
    errorMoviesDetail: state.movies.errorMoviesDetail
  }
}

const DetailMovieComponent = (props) => {
    return (
        <div className="grid grid-detail">
            <Card className="card card-detail">
                <CardImg
                  top
                  width="100%"
                  src={props.getMoviesDetail.image}
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle tag="h5">{props.getMoviesDetail.title}</CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">
                    {props.getMoviesDetail.showTime}
                  </CardSubtitle>
                  <CardText>
                      <FontAwesomeIcon icon={faHeart} /> {props.getMoviesDetail.like}
                  </CardText>
                </CardBody>
            </Card>
        </div>
    )
}

export default connect(mapStateToProps, null)(DetailMovieComponent)
