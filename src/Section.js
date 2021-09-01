// 객체 방식: {props.children}
// 구조 분해 할당 방식: {children}

function Section({children}) {
    return(
        <section className="section">
            {children}
        </section>
    );
}

export default Section;