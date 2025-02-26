import { Middleware, MiddlewareAPI, Dispatch, Action } from "redux";

interface WSAction extends Action {
  payload?: any;
}

const websocketMiddleware = (url: string): Middleware<{}, any, Dispatch<WSAction>> => {
  let socket: WebSocket | null = null;

  return (store: MiddlewareAPI) => (next: Dispatch<WSAction>) => (action: WSAction) => {
    switch (action.type) {
      case 'WS_CONNECT':
        if (socket) {
          socket.close();
        }

        socket = new WebSocket(url);
        socket.onopen = () => {
          console.log("WebSocket Connected");
          store.dispatch({type: "WS_OPEN"});
        }

        socket.onmessage = (event: MessageEvent) => {
          console.log("WebSocket Message", event.data);
          store.dispatch({type: "WS_MESSAGE_RECEIVED", payload: event.data});
        }

        socket.onerror = (error: Event) => {
          console.log("WebSocket Error", error);
          store.dispatch({type: "WS_ERROR", payload: error});
        }

        socket.onclose = () => {
          console.log('WebSocket отключён');
          store.dispatch({ type: 'WS_CLOSED' });
        };
        break;
      case 'WS_SEND_MESSAGE':
        if (socket && socket.readyState === WebSocket.OPEN) {
          socket.send(JSON.stringify(action.payload));
        } else {
          console.error('Соединение не установлено');
        }
        break;
      case 'WS_DISCONNECT':
        if (socket && socket.readyState === WebSocket.OPEN) {
          socket.close();
        }
        socket = null;
        break;
      default:
        break;
    }

    return next(action);
  }
}

export default websocketMiddleware;