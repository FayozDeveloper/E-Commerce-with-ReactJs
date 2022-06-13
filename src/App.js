import React from 'react'
import './index.css'
import Footer from "./components/footer";
import Header from "./components/header";
import Items from './components/items';
import data from './data';
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";



class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            orders:[],
            currentItems:[],
            data,
            showFullItem: false,
            fullItem: {}
        }
        this.state.currentItems = this.state.data
        this.addToOrder = this.addToOrder.bind(this)
        this.deleteOrder = this.deleteOrder.bind(this)
        this.chooseCategory = this.chooseCategory.bind(this)
        this.onShowItem = this.onShowItem.bind(this)
    }

    render(){
        return(
            <div className='wrapper'>
                <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
                <Categories chooseCategory={this.chooseCategory}/>
                <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder}/>

                {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem}/>}
                <Footer/>
            </div>
            )
    }

    onShowItem(item) {
        this.setState({fullItem: item})
        this.setState({showFullItem: !this.state.showFullItem})
    }

    chooseCategory(category){
        if(category === 'all') {
            this.setState({currentItems: this.state.data})
            return
        }

        this.setState({
            currentItems: this.state.data.filter(el => el.category === category)
        })
    }

    deleteOrder(id){
        this.setState({orders: this.state.orders.filter( el => el.id !== id)})
    }

    addToOrder(item) {
        let isInArray = false
        this.state.orders.forEach(e => {
            if (e.id === item.id)
                isInArray = true
        })
        if (!isInArray)
        this.setState({orders: [...this.state.orders, item]})
    }
}

export default App
