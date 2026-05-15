import React from "react";

class ListPlayer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      players: [
        {
          id: 1,
          name: "Nguyễn Văn Hoà",
          number: 19,
          position: "Tiền đạo",
          currentStatus: "Playing",
        },
        {
          id: 2,
          name: "Hoàng Văn Dũng",
          number: 10,
          position: "Tiền vệ",
          currentStatus: "Substitute",
        },
        {
          id: 3,
          name: "Nguyễn Quang Anh",
          number: 7,
          position: "Trung vệ",
          currentStatus: "Injured",
        },
      ],
      count: 0,
    };
  }

  componentDidMount() {
    this.state.count = this.state.players.length;
    console.log(`Số lượng cầu thủ: ${this.state.count}`);
    console.log("Component ListPlayer đã được gắn vào DOM");
  }

  componentDidUpdate(prevProps, prevState) {
    this.state.players.forEach((player, index) => {
      if (prevState.players[index]?.currentStatus !== player.currentStatus) {
        console.log(`Vừa cập nhật status cho cầu thủ ${player.name} `);
      }
    });
  }

  componentWillUnmount() {
    console.log("Component ListPlayer sắp bị gỡ khỏi DOM");
  }

  // Custom methods

  changeStatus = (id) => {
    const statuses = ["Playing", "Substitute", "Injured"];

    const newPlayers=  this.state.players.map((player) => {
        if(player.id === id) {
            const currentIndex = statuses.indexOf(player.currentStatus);
            const nextIndex = (currentIndex + 1) % statuses.length;
            player.currentStatus = statuses[nextIndex];
        };
        return player;
    });

    this.setState({ players: newPlayers });
  };

  render() {
    return (
      <div className="container-fluid">
        <h2>Danh sách cầu thủ</h2>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Player Name</th>
              <th scope="col">Number</th>
              <th scope="col">Position</th>
              <th scope="col">Current Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.players.map((player) => (
              <tr key={player.id}>
                <th scope="row">{player.id}</th>
                <td>{player.name}</td>
                <td>{player.number}</td>
                <td>{player.position}</td>
                <td>{player.currentStatus}</td>
                <td>
                  <button
                    className="btn btn-success"
                    onClick={() => {
                      this.changeStatus(player.id);
                    }}
                  >
                    Change Status
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p>Số lượng cầu thủ: {this.state.players.length}</p>
      </div>
    );
  }
}

export default ListPlayer;
