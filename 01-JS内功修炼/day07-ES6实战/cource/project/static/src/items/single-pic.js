/**
 * 单图模板
 */
import Component from './component';

export default class SinglePic extends Component {
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
