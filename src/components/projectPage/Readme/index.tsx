type props = {
    projectName: string
}

export default function ReadMe({projectName}: props) {
    switch (projectName) {
        case "OneBitFlix":
            return (
                <>
                    <p>Teste</p>
                </>
            )
        break
        case "RocketX":
            return (
                <>
                    <p>Teste</p>
                </>
            )
        break
        case "Draw Simulator":
            return (
                <>
                    <p>Teste</p>
                </>
            )
        break
        case "BLACK: e-commerce":
            return (
                <>
                    <p>Teste</p>
                </>
            )
        break
        case "Leads API":
            return (
                <>
                    <p>Teste</p>
                </>
            )
        break
        case "Stock Manager":
            return (
                <>
                    <p>Teste</p>
                </>
            )
        break
        default:
            return (<></>)
        break
    }
}