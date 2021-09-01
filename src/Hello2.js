function Hello2() {
    // 자바스크립트 변수 형태
    let name = 'JavaScript';

    return(
        <>
            {/* Hello2 component */}
            <section className="section01" id="section01">
                Hello {name} in Hello Component
            </section>
            <section className="section02" id="section02">
                Hello {name} in Hello Component
            </section>
        </>
    );
}

export default Hello2;