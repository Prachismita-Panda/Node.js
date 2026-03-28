import React from 'react'

export const getErrorMessage = (err)=> {

    const msg = (err.response && err.response.data && err.response.data.message);
    return msg
}