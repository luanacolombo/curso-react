const Events = () => {

    const handleMyEvents = (e) => {
        console.log(e);

        console.log("Ativou o evento!");
    }; //função

    const renderSomething = (x) => {
        if (x) {
            return <h1>Renderizando isso!</h1>
        } else {
            return <h1>Também posso renderizar isso!</h1>
        }
    }; //função que recebe x como argumento

    return (
        <div>
            <div>
                <button onClick={handleMyEvents}>Clique aqui!</button>
            </div>
            <div>
                <button onClick={() => console.log("Clicou!")}>Clique aqui também!</button>
                <button onClick={() => {
                    if (true) {
                        console.log("Isso não deveria existis =)");
                    }
                }}>Clica aquim, por favor</button>
            </div>
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    );
};

export default Events;