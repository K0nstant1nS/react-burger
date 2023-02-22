import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function UnAuthRoute({element}) {

    const { user } = useSelector(getUserFromStore);

    return (  );
}

export default UnAuthRoute;{element}