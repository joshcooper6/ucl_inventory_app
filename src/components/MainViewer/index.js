import { Container } from './styles/MainViewer'

export default function MainViewer({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}