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
        </div>
    )
};

export default Events;