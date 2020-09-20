import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Panel, PanelHeader, PanelHeaderButton, platform, IOS, FormLayout, Input, Textarea, Button, Group, Header, CardGrid, Card, RichCell} from '@vkontakte/vkui';
import './PrimaryForm.css';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon28EditOutline from '@vkontakte/icons/dist/28/edit_outline';
import Icon28CancelOutline from '@vkontakte/icons/dist/28/cancel_outline';
const osname = platform();



function PrimaryForm(props){

    console.log(props.expArray)
    return <Panel id={props.id}>
		<PanelHeader
            separator={true}
			left={<PanelHeaderButton onClick={props.go} data-to="home">
				{osname === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</PanelHeaderButton>}
		>
		Опыт
		</PanelHeader>

        <Group>
        <CardGrid>
        {
        props.expArray.map((item) => (
        <Card size="l">
            <RichCell
                disabled
                multiline
                text={<div className="companyText">{item.company}</div>}
                caption={item.startMonth + "   " + item.finishMonth}
                after= {<div className="cardButtons">
                    <Icon28CancelOutline className="Icon28Cancel" onClick = {() => {props.removeExp(item.id)}}/>
                    <Icon28EditOutline className="Icon28Edit" onClick = {() => {props.modifyExp(item.id)}}/>
                </div>}
                bottom={<div className="companyText">{item.description}</div>}            >
            <div className="companyText">{item.position}</div>
            </RichCell>
        </Card>))
        }
        </CardGrid>
        <Button className="modalButton" size="xl" onClick={props.modal}>Добавить</Button>
        <Button className="modalButton" size="xl" onClick={props.postIt}
            disabled={!(props.expArray.length > 0 )}>Отправить</Button>
        <Button className="modalButton" size="xl" onClick={props.go} data-to="questions" 
            style={props.expArray.length > 0 ? {display: "none"}:{}} mode = "secondary">У меня нет опыта</Button>
        </Group>

	</Panel>
};

PrimaryForm.propTypes = {
	id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
    modal: PropTypes.func.isRequired,
    expArray: PropTypes.array.isRequired,
    removeExp: PropTypes.func.isRequired,
    modifyExp: PropTypes.func.isRequired,
    postIt: PropTypes.func.isRequired
};

export default PrimaryForm;
