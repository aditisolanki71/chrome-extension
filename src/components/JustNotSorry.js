import React from "react";
import { forEachUniqueContentEditable } from '../callbacks/ContentEditableDiv';

const WATCH_FOR_NEW_NODES = {
    subtree: true,
    childList: true,
  };
  
class JustNotSorry extends React.Component {
    constructor(props) {
        console.log("constructor called");
        super(props);
        this.state = {
          parentNode: {},
          warnings: [],
        };


        this.applyEventListeners = this.applyEventListeners.bind(this);

        this.documentObserver = new MutationObserver(
            forEachUniqueContentEditable(this.applyEventListeners)
          );
          console.log("document",this.documentObserver);
        this.documentObserver.observe(document.body, WATCH_FOR_NEW_NODES);
    }
    applyEventListeners(mutation) {
        console.log("apply event listeners",mutation);
        const email = mutation.target;
        console.log("email is",email)
    }
    render() {
        console.log("render method")
        return (
            <div>Hello Chrom extension</div>
        )
    }
}
export default JustNotSorry;