import React, { Component } from 'react';


const flag = [
    {
        name: 'Қазақстан',
        photo: './flags/kazakhstan.jpg',
    },
    {
        name: 'АҚШ',
        photo: './flags/usa.png',
    },
    {
        name: 'Франция',
        photo: './flags/france.webp',
    },
    {
        name: 'Аргентина',
        photo: './flags/argentina.svg',
    },
    {
        name: 'Индонезия',
        photo: './flags/indonesia.png',
    },
    {
        name: 'Қытай',
        photo: './flags/china.jpg',
    },
    {
        name: 'Италия',
        photo: './flags/italy.svg',
    },
    {
        name: 'Израиль',
        photo: './flags/israel.svg',
    },
    {
        name: 'Жапония',
        photo: './flags/japan.png',
    },
    {
        name: 'Оңтүстік Корея',
        photo: './flags/south_korea.png',
    },
    {
        name: 'Нигерия',
        photo: './flags/nigeria.svg',
    },
    {
        name: 'Бельгия',
        photo: './flags/belgium.avif',
    },
    {
        name: 'Болгария',
        photo: './flags/bulgaria.svg',
    },
    {
        name: 'Австралия',
        photo: './flags/australia.png',
    },
    {
        name: 'Нидерланды',
        photo: './flags/netherlands.png',
    },
]

const flagCount = flag.length;

class Games extends Component {
    constructor(props) {
        super(props);
        const newIndex = this.changeIndex(flagCount);
        const randomIndex = this.changeIndex(3);
        const newButtons = [this.changeIndex(flagCount), this.changeIndex(flagCount), this.changeIndex(flagCount), this.changeIndex(flagCount)];
        newButtons[randomIndex] = newIndex;
        this.state = {
            index: newIndex,
            buttons: newButtons,
            count: 0
        };
    }

    changeIndex = (max) => {
        return Math.floor(Math.random() * max);
    }

    changeFlag = (option) => {
        if (this.state.index == option) {
            const newIndex = this.changeIndex(flagCount);
            const randomIndex = this.changeIndex(3);
            const newButtons = [this.changeIndex(flagCount), this.changeIndex(flagCount), this.changeIndex(flagCount), this.changeIndex(flagCount)];
            newButtons[randomIndex] = newIndex;
            this.setState({
                index: newIndex,
                buttons: newButtons,
                count: this.state.count + 1
            });
        }
        else{
            this.setState({
                count: 0
            });
        }
    }

    render() {
        return (
            <div>
                <p className='count'>{this.state.count}</p>
                <img className='flag' src={flag[this.state.index].photo} alt="мемлекет"/>
                {this.state.buttons.map((buttonIndex, index) => (
                    <button className='buttons' key={index} onClick={() => this.changeFlag(buttonIndex)}>
                        {flag[buttonIndex].name}
                    </button>
                ))}
            </div>
        );
    }
}

export default Games;