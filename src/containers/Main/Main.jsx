/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import * as fetch from '../../store/actions';
import Tickets from '../../components/Tickets';
import Filter from '../../components/Filter';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import loading from '../../img/loading.gif';
import classes from './Main.module.scss';
import {
	getSearchId, getTicketsAll, getTicketsNone, getTicketsOne,
	getTicketsTwo, getTicketsThree, getStop, getCheap, getFetching
} from '../../store/selectors';

const Main = ({
	searchId, addSearchId, addTickets, ticketsAll, isFetching,
	ticketsNone, ticketsTwo, ticketsThree, ticketsOne, stop, cheap }) => {
	
	const [slice, setSlice] = useState(5);
	useEffect(() => {
		if (ticketsAll===false) setSlice(5); /// если нужен сброс до 5 билетов
		if (!searchId) addSearchId();
		if (!stop && searchId !== '') addTickets(searchId);
	}, [searchId, stop, addSearchId, addTickets, ticketsAll, ticketsOne, slice]);
	
	const showMoreTickets = () => {
		setSlice(slice + 5);
	};
	let ticketList = [];
	const tickets = [
		...(ticketsNone || []), ...(ticketsOne || []), 
		...(ticketsTwo || []), ...(ticketsThree || [])];

	if ((tickets)) {
		if (cheap) {
			ticketList = tickets.sort((prev, next) => prev.price - next.price);
		} else {
			ticketList = tickets.sort((prev, next) =>
				(prev.segments[0].duration + (prev.segments[1].duration) -
				(next.segments[0].duration + next.segments[0].duration)));
		}
	}
	const ticketsForRender = ticketList.slice(0, slice);
return (
		<div className={classes.App__wrapper}>
			<Filter />
			<div className={classes.App__container}>
				<Header />
				<main className={classes.App}>
					<div className={classes.App__img}>  
					{isFetching ? 
									<img src={loading} alt="loading" />
							: null}
					{!tickets.length && <span>Рейсов, подходящих под заданные фильтры, не найдено</span>}
					</div>
					<Tickets
						tickets={ticketsForRender}
					/>
					{ !(!tickets.length) &&
						<Footer showMoreTickets={showMoreTickets}/>
					}
					</main>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	searchId: getSearchId(state),
	cheap: getCheap(state),
	ticketsAll: getTicketsAll(state),
	ticketsNone: getTicketsNone(state),
	ticketsOne: getTicketsOne(state),
	ticketsTwo: getTicketsTwo(state),
	ticketsThree: getTicketsThree(state),
	isFetching: getFetching(state),
	stop: getStop(state),
});
// reselect
export default connect(mapStateToProps, fetch)(Main);
