import Button from '@material-ui/core/Button';

const ButtonTest = ( {isDisabled, setIsDisabled} ) => {
    // Ko co doi so
    // onClick = { isDisable }
    // Neu co doi so
    // onClick = {()=> isDisable(parameter)}

    // let a = 0;

    return (
        <Button onClick={() => { setIsDisabled(!isDisabled) }} variant="contained" disabled={ isDisabled }>
            Disabled
        </Button>
    );
}

export default ButtonTest;