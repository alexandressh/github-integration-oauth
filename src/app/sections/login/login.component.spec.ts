import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastrService } from 'ngx-toastr';
import { cold, getTestScheduler } from 'jasmine-marbles';

import { LoginComponent } from './login.component';
import { GithubService } from 'src/app/services/github.service';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  const githubSpy = jasmine.createSpyObj('GithubService', ['getGithubLoginUrl']);
  const toastrSpy = jasmine.createSpyObj('ToastrService', ['error']);

  let githubServiceMock: jasmine.SpyObj<GithubService>;
  let toastrMock: jasmine.SpyObj<ToastrService>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LoginComponent
      ],
      providers: [
        { provide: GithubService, useValue: githubSpy},
        { provide: ToastrService, useValue: toastrSpy }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;

    githubServiceMock = TestBed.get(GithubService);
    toastrMock = TestBed.get(ToastrService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should retrieve Github URL', () => {
    const githubUrl = 'http://someurl/';

    const $q = cold('----x|', {x: githubUrl});
    githubServiceMock.getGithubLoginUrl.and.returnValue($q);

    fixture.detectChanges();
    getTestScheduler().flush();

    expect(component.githubUrl).toEqual(githubUrl);
  });

  it('should handle error when fetching Github URL', () => {
    const $q = cold('---#|', null, new Error('Error when fetching data'));

    githubServiceMock.getGithubLoginUrl.and.returnValue($q);

    fixture.detectChanges();
    getTestScheduler().flush();

    expect(component.githubUrl).toBe('');
    expect(toastrMock.error).toHaveBeenCalled();
  });
});
