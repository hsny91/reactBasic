
import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import DishDetail from './DishDetailComponent';

class Menu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null
        }
    }

    onDishSelect(dish) {
        this.setState({ selectedDish: dish }); {/* To equal the selected dish with the dish we click */}
        console.log('now received dish')
    }

    render() {

        const menu = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    {/* the key attribute is necessary for every list in React 
                    The key helps React to recognize each one of these elements and while it is
                    updating the screen so the keys will enable it
                    to identify each of those elements uniquely*/}
                    <Card onClick={() => this.onDishSelect(dish)}> {/* onClick helps us show information about 
                                                                    what we want when it is clicked */}
                        <CardImg width="100%" src={dish.image} alt={dish.name}/> 
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <div>
                    <DishDetail dish={this.state.selectedDish}/>
                </div>
            </div>
        );
    }
}

export default Menu;
