import { VerticalTimeline,VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import 'react-confirm-alert/src/react-confirm-alert.css';
import FavoriteIcon from '@material-ui/icons/Favorite';
import WorkIcon from '@material-ui/icons/Work';
import DoneIcon from '@mui/icons-material/Done';

const TodoList = ({TODOList, handleToggle, handleFilter, onDeleteClick, onEditClick}) => {
    const handleClick = (e) => {
        e.preventDefault()
        handleToggle(e.target.dataset.id)
    }
    const handleClickDelete = (e)=> {
        e.preventDefault();
        onDeleteClick(e.target.dataset.id)
    }


    return (
        <div className="contains-list">
            <div className="btn">
               <button onClick={handleFilter}>Clear Completed</button>
            </div>

            <VerticalTimeline>
                {
                    TODOList.map(todo => {
                        const myClass = todo.complete ? "strick" : "nostrick";
                        const Icon = todo.complete ? <DoneIcon /> : <WorkIcon />
                        const btnTitle = todo.complete ? 'Undo' : 'Complete';
                        const btnClass = todo.complete ? 'btn_Undo' : 'btn_complete';
                        const btnDelete = todo.complete ? 'btn_del_complete' : 'btn_del';
                        const btnEdit = todo.complete ? 'btn_ed_complete' : 'btn_ed';

                        return (
                            <VerticalTimelineElement className={myClass}

                                contentStyle={{ background: 'rgb(200, 132, 145)', color: '#fff' }}
                                contentArrowStyle={{ borderRight: '7px solid  rgb(200, 132, 145)' }}

                                date={"Due: " + todo.dateOf} id={String(todo.id)} icon={Icon}
                                
                                iconStyle={{ background: 'rgb(1, 1, 1)', color: '#fff' }}>

                                    <button onClick={handleClick} data-id={String(todo.id)}
                                    className={btnClass}>{btnTitle}</button>
                                    
                                    <button style={{marginLeft: "5px"}} data-id={String(todo.id)} 
                                    onClick={handleClickDelete} className={btnDelete}>Delete</button>

                                    <button style={{marginLeft: "5px"}} data-id={String(todo.id)} 
                                    onClick={onEditClick} className={btnEdit}>Edit</button>

                                    <p><font size="9">{todo.item}</font></p>
                            </VerticalTimelineElement>
                        );
                    })
                }
            <VerticalTimelineElement 
                icon={<FavoriteIcon/>}
                iconStyle={{ background: 'rgb(239, 61, 91, 1)', color: '#212930' }}>
            </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    );
};

export default TodoList;
