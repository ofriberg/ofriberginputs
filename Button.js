import React from 'react'
import PropTypes from 'prop-types'
import * as S from './Button.styled'

const Button = ({onClick, title}) => {
    return (
        <S.Container>
            <S.Button onClick={onClick}>{title}</S.Button>
        </S.Container>
    )
}

Button.propTypes = {
    onClick: PropTypes.func,
    title: PropTypes.string
}
Button.defaultProps = {
    onClick: () => null,
    title: 'btn'
}

export default Button