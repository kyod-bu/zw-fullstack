import Component from './component';

export default class extends Component {
    
    constructor(props) {
        super(props);
    }
    
    render() {
        const title = this.props.data.title;
        return `<div>
                ${title}
            </div>`;
    }
}