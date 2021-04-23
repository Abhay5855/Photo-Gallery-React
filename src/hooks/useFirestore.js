import { useState, useEffect } from "react";

import {Photofirestore}  from "../Firebase";

const useFirestore = (collection) => {


const [docs,setDocs] = useState([]);


useEffect(()=> {




},[collection]);







return {docs};
}


