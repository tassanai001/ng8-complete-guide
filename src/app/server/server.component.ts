import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  serverName: string = "";
  serverStatus1: string = "offline";
  serverStatus2: string = "offline";
  serverLists: string[] = ['server1', 'server2', 'server3', 'server4', 'server5']

  constructor() {
    setTimeout(() => {
      this.serverStatus1 = "online";
    }, 2000)
  }

  ngOnInit() {
  }

  onResetServerName() {
    this.serverName = "";
  }

  getColor() {
    return this.serverStatus1 === 'online' ? 'green' : 'red';
  }

  getClass() {
    return this.serverStatus1 === 'online' ? 'online' : 'offline';
  }

}
