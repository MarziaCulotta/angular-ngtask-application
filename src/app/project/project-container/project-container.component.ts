import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { Project } from '@app/models/Project';
import { ProjectService } from '../project.service';

@Component({
  selector: 'ngprj-project-container',
  templateUrl: './project-container.component.html',
  styleUrls: ['./project-container.component.css']
})
export class ProjectContainerComponent implements OnInit {
  subscription!: Subscription;
  selectedProject!: Project;

  // projects: Project[] = [];
  projects$!: Observable<Project[]>;

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.projects$ = this.projectService.getAll();
  }

  selectProject(project: Project) {
    this.selectedProject = this.projectService.get(project.id);
  }

  submitProjectForm(project: Project) {
    this.projectService.add(project);

  }

  testMethod(str: string) {
    console.log('Stringa ricevuta dal parent', str);
  }

}
