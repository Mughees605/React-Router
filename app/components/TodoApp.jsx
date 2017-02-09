var React = require('react');

var TodoForm = React.createClass({
handleList:function(e){
    e.preventDefault();
    var value = this.refs.name.value;
    if(value.length > 0){
    this.props.passValue(value);
    this.refs.name.value = "";
}
else{
    alert("please write something");
}
    
},
    render:function(){
        return(
             
            <div className = "row">
            <div className = "large-12 columns">
            <div className = "row collapse">
              <div  className = "small-10 columns">
            <input type="text" ref = "name" className = "form-control"/>
                </div>
            <div className="small-2 columns">
          <a href="#" className="button postfix" onClick = {this.handleList}>Add</a>
        </div>
            
              </div>
            </div>
            </div>
        )
    }
});

var TodoList = React.createClass({
    getInitialState:function(){
        return {
            editing:false,
        }
    },

    remove:function(){
        this.props.onRemove(this.props.index);
    },

    edit:function(){
        this.setState({
            editing:true,
        })
    },
    save:function(){

    },

    renderDisplay:function(){
        return (
            <li>
            {this.props.children}
            <span>
            <button onClick = {this.remove} className = "alert button">delete</button>
            <button onClick = {this.edit} className = "primary button">edit</button>
            </span>
            </li> 
        )
    },
    takeHandleSave:function(){
         var saveValue = this.refs.name.value;
         this.props.onSave(saveValue,this.props.index);
         this.setState({
             editing:false,
         })
        },

    renderForm:function(){
        
        return (
        <form>
        <input type = "text" ref = "name" defaultValue = {this.props.children}/>
        <button onClick = {this.takeHandleSave} className = "success button right">save</button>
        </form>
        )
    },
   
   render:function(){
       if(this.state.editing){
           return this.renderForm();
       }
       else {
           return this.renderDisplay();
       }
   }
});


var TodoApp = React.createClass({
    getInitialState:function(){
        return {
            editing:false,

            notes:[

            ],
        }
    },
    addList:function(val){
    var arr = this.state.notes;
    arr.push(val);
    this.setState({
        notes:arr,
    })
    },
     handleRemove:function(i){
     var arr = this.state.notes;
     arr.splice(i,1);
     this.setState({
         notes:arr,
     })
    },
    handleSave:function(save,i){
    var arr = this.state.notes;
    arr[i] = save;
    this.setState({
        notes:arr
    })
    },
    eachNote:function(note,i){
        return  <TodoList key = {i} index = {i} onRemove = {this.handleRemove} onSave = {this.handleSave}>{note}</TodoList>
    },
    render:function(){
        return (
                   
            <div className="row">
            <div className="small-6 small-centered columns">
              <h1 className = "text-center">To Do App</h1>
            <TodoForm passValue = {this.addList}/>
             <ul className="small-10">
             {this.state.notes.map(this.eachNote)}
             </ul>
            </div>
            </div>
        )
    }
});
module.exports = TodoApp;