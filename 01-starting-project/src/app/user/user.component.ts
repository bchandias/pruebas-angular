import { Component, computed, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';


const ramdonmIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  selectedUser = signal(DUMMY_USERS[ramdonmIndex]);
  imagePath = computed(() => `assets/users/${this.selectedUser().avatar}`);

  onSelectUser() {
    const ramdonmIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser.set(DUMMY_USERS[ramdonmIndex]);
  }
}
