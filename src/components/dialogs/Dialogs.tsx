import React from "react";
import st from './Dialogs.module.css'

const Dialogs: React.FC = () => (
    <div className={st.dialogs}>
        <div className={st.title}>Select a chat to start messaging</div>
    </div>
)

export default Dialogs;