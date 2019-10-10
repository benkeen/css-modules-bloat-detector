import React from 'react';
import * as styles from './App.module.scss';

function App () {
    return (
        <div>
            <h1>CSS Modules Bloat Detector</h1>
            <section className={styles.panels}>
                <section className={styles.codePanel}>
                    code here
                </section>
                <section className={styles.generatedPanel}>
                    generated here
                </section>
            </section>
        </div>
    );
}

export default App;
