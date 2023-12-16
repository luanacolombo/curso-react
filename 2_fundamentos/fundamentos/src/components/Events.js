const Events = () => {

    const handleMyEvents = (e) => {
        console.log(e);

        console.log("Ativou o evento!");
    }; //função

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
        </div>
    )
};

export default Events;