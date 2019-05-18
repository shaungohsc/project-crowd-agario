import { decorate } from 'mobx';
import { observable } from 'mobx';


class CoordinateStore {

    coordList;

    constructor(props) {
      this.state = {
        error: null,
        isLoaded: false,
        coordList: [{x: 0, y: 0, z: 0}]
      };
    }

    //   fetch("")
    //     .then(res => res.json())
    //     .then(
    //       (result) => {
    //         this.setState({
    //           isLoaded: true,
    //           items: result.items
    //         });
    //       },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
        //   (error) => {
        //     this.setState({
        //       isLoaded: true,
        //       error
        //     });
        //   }
        // )
    
    update = (updatedList) => {
        this.coordList = updatedList;
    }
};

  decorate(CoordinateStore, {
    coordList: observable,
  });

const rootElement = document.getElementById("root");


export default CoordinateStore;
  