import React from 'react'
import PropTypes from 'prop-types'
import * as S from './Button.styled'

const Button = props => {
    return (
        <S.Container>
            <S.Button onClick={handleClick}>{title}</S.Button>
        </S.Container>
    )
}

Button.propTypes = {
    handleClick: PropTypes.func,
    title: PropTypes.string
}
Button.defaultProps = {
    handleClick: () => null,
    title: 'btn'
}

export default Button