import { useState } from "react";
import './TextAnalyze.css'

const TextAnalyze = ({heading, alertShow}) => {
    const [content, setContent] = useState('');
    
    const handleUp = () => {
        setContent((content) => content.toUpperCase())
        alertShow("success", "Transformed to UpperCase")
    }

    const handleInputChange = (e) => {
        setContent(e.target.value);
    }

    const handleLow = () => {
        setContent((content) => content.toLocaleLowerCase());
        alertShow("success", "Transformed to LowerCase")
    }

    const handleClear = () => {
        setContent((content) => "");
        alertShow("success", "Cleared Text Area")
    }

    const handleExtra = () => {
        let text = content.split(/[ ]+/);
        setContent(text.join(" "));
        alertShow("success", "Removed Extra Spaces.")
    }


    return (
        <div className="container">
            <h1 className="pt-3">{heading}</h1>
            <textarea className="form-control m-1" value={content} onChange={handleInputChange} id="content" rows="10" placeholder="Enter your content"></textarea>
            <button className="btn btn-primary mx-1" onClick={handleUp}>Transfrom to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLow}>Transfrom to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleClear}>Clear Text</button>
            <button className="btn btn-primary mx-1" onClick={handleExtra}>Remove Extra Spaces</button>

            <div className="mt-4">
                <hr />
                <h2 style={{textDecoration: "underline"}}>Content Summary: </h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Characters Count</th>
                            <th>Word Count</th>
                            <th>Spaces Count</th>
                            <th>Sentences Count</th>
                            <th>Paragraphs Count</th>
                            <th>Punctuations Count</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><h4><span className="text-danger">{content.length}</span></h4></td>
                            <td><h4><span className="text-success">{content.split(/\s+/).filter(word => word !== '').length}</span></h4></td>
                            <td><h4><span className="text-danger-emphasis">{content.split(" ").length - 1}</span></h4></td>
                            <td><h4><span className="text-secondary-emphasis">{content.split(/[.!?]+/g).length - 1}</span></h4></td>
                            <td><h4><span className="text-primary">{content.split(/\n+/).length - 1}</span></h4></td> 
                            {/*   \n\s*\n     => if two enter is considerd as new paragraph*/}
                            <td><h4><span className="text-info">{content.split(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g).length - 1}</span></h4></td> 
                        </tr>

                    </tbody>
                </table>

                <p>{0.008 *  content.split(/\s+/).filter(word => word !== '').length} Minutes read</p>
                <h2>Preview</h2>
                <p>{content.length > 0 ? content : "Nothing to preview!"}</p>
            </div>
        </div>
    )
}

export default TextAnalyze;