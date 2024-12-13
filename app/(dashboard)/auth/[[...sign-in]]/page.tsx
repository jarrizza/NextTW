import React from 'react'

export default function SigninFallbackPage({params} : {params: {'sign-in': string[]} }) {
    console.log(params);
    let value1 = 'v1';
    let value2 = 'v2';
    const signin = params['sign-in'];
    if (signin) {
      value1 = signin[1] || 's1';
      value2 = signin[2] || 's2';
    }
  return (
    <div>Signin catch all Page = {value1} : {value2} </div> 
)
}
