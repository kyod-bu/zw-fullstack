/**
 * 多图模板
 */
import Component from './component';

export default class extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const data = this.props.data;
        // console.log('item::', this.props);
        // ES6 模板字符串的使用
        return `<div>
                <span>${data.title}</span>
                ${data.imageList.map(imageUrl => {
                    return `<img src="${imageUrl}" />`
                }).join('')}
        </div>`;
    }
}
