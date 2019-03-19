import React from 'react'

export const fetchJSONfrom = (url) => {
	return fetch(url,
		{	method: 'GET',
			headers: {'Content-Type': 'application/json'}
		}
	).then( (r) => r.json() )
}

export const postDataAsJSON = (url,method,data,okCBK,errCBK) => {
	const token = $('meta[name="csrf-token"]').attr('content');	
	return fetch(url,
		{	method: method,
			body: JSON.stringify(data),
      credentials: 'same-origin',
			headers: 
						{'Content-Type': 'application/json',
			      'Accept': 'application/json',
		        'X-Requested-With': 'XMLHttpRequest',
		        'X-CSRF-Token': token
			      }
		}
	).then( (result) => 
		okCBK(result) )
	.catch ((error) => errCBK(error))
}


export const ipost = (url,method,data,okCBK,errCBK) => {
	const token = $('meta[name="csrf-token"]').attr('content');	
	return fetch(url,
		{	method: method,
			body: JSON.stringify(data),
      credentials: 'same-origin',
			headers: 
						{'Content-Type': 'application/json',
			      'Accept': 'application/json',
		        'X-Requested-With': 'XMLHttpRequest',
		        'X-CSRF-Token': token
			      }
		}
	).then( (res) =>{ if(res.ok){
					res.json().then( 
						(resj)=>okCBK(resj)
					)
				}else{
					console.log('request error: '+res.status+ '-'+res.statusText)
				}}
	).catch ((error) => errCBK(error))
}


export const Spinner = ()=>{
	return(
		<div id="circle">
		  <div className="loader">
		    <div className="loader">
		        <div className="loader">
		           <div className="loader">

		           </div>
		        </div>
		    </div>
		  </div>
		</div> 
	)
}
