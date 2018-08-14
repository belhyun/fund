import React from 'react';
import DarkFooter from './css/Dark-Footer.css';
import DarkFooter1 from './css/Dark-Footer-1.css';
import DarkFooter2 from './css/Dark-Footer-2.css';
import DarkFooter3 from './css/Dark-Footer-3.css';
import DarkFooter4 from './css/Dark-Footer-4.css';
import DarkFooter5 from './css/Dark-Footer-5.css';
import KDHeader from './css/KD_Header.css';
import KDHeader1 from './css/KD_Header-1.css';
import KDHeader2 from './css/KD_Header-2.css';
import MusaPanelTable from './css/MUSA_panel-table.css';
import MusaPanelTable1 from './css/MUSA_panel-table-1.css';
import NewsCard from './css/News-Cards.css';
import PrettyFooter from './css/Pretty-Footer.css';
import Styles from './css/styles.css';
import NavBar from './navbar/NavBar';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
                <div>
                    <NavBar/>
                </div>
        );
    }
}