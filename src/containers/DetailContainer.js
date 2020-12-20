import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container } from 'reactstrap'
import { getMoviesDetail } from '../actions/movieAction'
import BackComponent from '../components/BackComponent'
import DetailMovieComponent from '../components/DetailMovieComponent'

class DetailContainer extends Component {
    componentDidMount(){
        this.props.dispatch(getMoviesDetail(this.props.match.params.id))
    }

    render() {
        return (
            <div>
                <Container>
                    <BackComponent />
                    <DetailMovieComponent />
                </Container>
            </div>
        )
    }
}

export default connect()(DetailContainer)