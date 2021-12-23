import {
    Container,
    Logo,
    SelectWrap,
    Select,
    Subheader,
    SubheaderWrap,
    Option,
    SubheaderContainer
} from './styles/Header'

export default function Header({children, ...restProps}) {
    return (<Container {...restProps}>{children}</Container>)
}

Header.Logo = function HeaderLogo({src, ...restProps}) {
    return (<Logo src={src} {...restProps} />)
}

Header.SelectWrap = function HeaderSelectWrap({children, ...restProps}) {
    return (<SelectWrap {...restProps}>{children}</SelectWrap>)
}

Header.Option = function HeaderSelectOption({children, ...restProps}) {
    return (<Option {...restProps}>{children}</Option>)
}

Header.Select = function HeaderSelectWrap({children, ...restProps}) {
    return (<Select {...restProps}>{children}</Select>)
}

Header.SubheaderWrap = function HeaderSubheaderWrap({children, ...restProps}) {
    return (<SubheaderWrap {...restProps}>{children}</SubheaderWrap>)
}

Header.Subheader = function HeaderSubheader({children, ...restProps}) {
    return (<Subheader {...restProps}>{children}</Subheader>)
}

Header.SubheaderContainer = function HeaderSubheaderContainer({children, ...restProps}) {
    return (<SubheaderContainer {...restProps}>{children}</SubheaderContainer>)
}

