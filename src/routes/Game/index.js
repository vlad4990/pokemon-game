const GamePage = ({ onChangePage }) => {

    const handleClickButton = () => {
        console.log('####: <HomePage />');
        onChangePage && onChangePage('home');
    }
    return (
            <div>
                <p> This is Game Page!!!</p>
                <div>
                    <button onClick={handleClickButton}>
                        Вернуться на главную страницу
                    </button>
                </div>
            </div>
    );
};

export default GamePage;