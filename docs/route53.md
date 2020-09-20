aws route53

https://www.youtube.com/watch?v=RGWgfhZByAI&feature=youtu.be

Amazon Route 53 is a highly available and scalable cloud Domain Name System (DNS) web service.

route 53은 DNS 서비스로서 도메인 이름과 IP 주소를 연결하도록 돕는다.

DNS : 전 세계 서버 네트워크 (IP 지원 장치가 서로 통신하도록 함.)
alias record : cloud-front 배포 / s3 버킷 등 aws 리소스로 트래픽을 라우팅하기 위해 생성할 수 있는 레코드 유형
DNS Query : 도메인 이름과 연결된 리소스를 위해 DNS에게 하는 요청 / 응답은 웹 서버 리소스에 연결된 IP 주소
DNS Resovler : ISP가 관리하는 사용자 요청과 DNS 이름 서버 사이에서 중개 역할을 하는 DNS 서버

route 53에서 도메인 이름을 동록하면, 동일한 이름의 public hosting area를 생성
public hosting area : 도메인과 그 전체 하위 도메인의 트래픽을 라우팅하는 방법에 대한 정보를 포함하고 있는 레코드의 컨테이너. 호스팅 영역은 해당 도메인과 이름이 같다.
