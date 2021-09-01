import footer from '../css/footer.module.css'

function TodoFooter() {

    return(
        <footer className={footer.footer}>
            <div className={footer.section}>
                <div>TODO APP</div>
                <div>&copy; Copyright All right reserved.</div>
            </div>
        </footer>
    );

}

export default TodoFooter;