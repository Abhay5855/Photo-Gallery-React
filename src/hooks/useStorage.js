import { useState, useEffect } from "react";
import Upload from "../components/Uploadform";
import { Photostorage } from "../Firebase";

const [progress, setProgress] = useState(0);
const [error, setError] = useState(null);
const [url, setUrl] = useState(null);

useEffect(() => {}, [file]);
