import MyComponent from "./MyComponent";

const FirstComponent = () => {
    /*
    multi line
    */

    return (
        <div>
            {/* algum comentário*/}
            <h1>Meu primeiro componente</h1>
            <p className="teste">Meu texto</p>
            <MyComponent />
        </div>
    );
};

export default FirstComponent;