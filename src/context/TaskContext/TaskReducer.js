const tasks = (state, action) => {
  switch (action.type) {
    case "GET_TASKS":
      return {
        ...state,
        tasks: action.payload,//res.data
      };
    case "DELETE_TASK":
      return {
        ...state,
        //filtramos las tareas y devolvemos las que su id no es el id de la tarea que hemos eliminado
        tasks: state.tasks.filter(task => task._id !== action.payload)//id tarea eliminada
      }
      case "CREATE_TASK":
        return{
            ...state,
            tasks: [action.payload,...state.tasks]
        }
        case "GET_TASK_BY_ID":{
            return{
                ...state,
                taskById: action.payload
            }
        }
    default:
      return state;
  }
};
export default tasks;
