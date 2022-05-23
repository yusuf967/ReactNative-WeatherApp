import React,{useState, useEffect} from 'react';

function useFetch(url){
    const [error, setError]=useState(null);
    const [loading, setLoading]=useState(true);
    const [list, setList]=useState([]);
    fetchData();
  async function fetchData(){
      try {
        var data = null;

        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;
    
        xhr.addEventListener("readystatechange", function () {
          if (this.readyState === this.DONE) {
            console.log(this.responseText);
          }
        });
    
        xhr.open("GET", url);
        xhr.setRequestHeader("content-type", "application/json");
        xhr.setRequestHeader("authorization", "apikey 3EZuAtDLml836x0tTvb0GX:2gyKMfFcHSquMs5TdRMKCG");
        console.log(xhr.send(data));
        setList(xhr.send(data));
        setLoading(false);
      } catch (error) {
          setError(error.message);
          setLoading(false);
      }
  }

  return{error,loading,list}
}

export default useFetch;