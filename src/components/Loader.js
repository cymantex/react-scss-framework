import React from "react";
import {classNames, getOptionalClasses, filterOutOptionalClasses} from "../services/className";

export const Loader = ({size = "medium", className = "", ...props}) => (
    <div
        className={classNames({
            ...getOptionalClasses(props),
            [`loader-${size}`]: true
        }, className)}
        {...filterOutOptionalClasses(props)}
    />
);