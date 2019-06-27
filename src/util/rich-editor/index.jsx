import React        from 'react';
import Simditor     from 'simditor';
import $ from 'jquery';
import 'simditor/styles/simditor.scss';
import './index.scss'; 
class RichEditor extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.loadEditor();
    }
    componentWillReceiveProps(nextProps){
        if(this.props.defaultDetail !== nextProps.defaultDetail){
            this.simditor.setValue(nextProps.defaultDetail);
        }
    }
    loadEditor(){
        let element = this.refs['textarea'];
        Simditor.locale = 'en-US'
        this.simditor = new Simditor({
            textarea: $(element),
            defaultValue: this.props.placeholder || 'please input your content',
            upload: {
                url             : '/manage/product/richtext_img_upload.do',
                defaultImage    : '',
                fileKey         : 'upload_file'
            }
        });
        this.bindEditorEvent();
    }
    bindEditorEvent(){
        this.simditor.on('valuechanged', e => {
            this.props.onValueChange(this.simditor.getValue());
        })
    }
    render(){
        return (
            <div className="rich-editor">
                <textarea ref="textarea"></textarea>
            </div>
        );
    }
}

export default RichEditor;