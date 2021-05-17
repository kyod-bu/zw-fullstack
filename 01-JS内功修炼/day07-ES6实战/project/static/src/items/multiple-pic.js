import Component from './component';

export default class extends Component {
    
    constructor(props) {
        super(props);
    }
    
    render() {
        const data = this.props.data;
        return `<div>
                <span>${data.title}</span>
                ${data.imageList.map(imageUrl => {
                    return `<img src="${imageUrl}" />`
                }).join('')}
            </div>`;
    }
}