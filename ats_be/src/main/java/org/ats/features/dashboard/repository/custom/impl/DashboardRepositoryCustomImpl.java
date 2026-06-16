package org.ats.features.dashboard.repository.custom.impl;

import jakarta.persistence.EntityManager;
import jakarta.persistence.criteria.*;
import lombok.RequiredArgsConstructor;
import org.ats.features.dashboard.dto.DashboardSearchRequest;
import org.ats.features.dashboard.dto.DashboardSearchResponse;
import org.ats.features.dashboard.dto.record.SearchCriteriaContext;
import org.ats.features.dashboard.repository.custom.DashboardRepositoryCustom;
import org.ats.features.entities.Department;
import org.ats.features.entities.Job;
import org.ats.features.entities.User;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
@RequiredArgsConstructor
public class DashboardRepositoryCustomImpl implements DashboardRepositoryCustom {

    private final EntityManager em;
    @Override
    public List<DashboardSearchResponse> search(DashboardSearchRequest dashboardSearchRequest) {
        CriteriaBuilder criteriaBuilder = em.getCriteriaBuilder();
        CriteriaQuery<DashboardSearchResponse> criteriaQuery = criteriaBuilder.createQuery(DashboardSearchResponse.class);
        Root<User> userRoot = criteriaQuery.from(User.class);
        Join<User, Department> departmentJoin = createDepartmentJoin(userRoot);
        Join<User, Job> jobJoin = createJobJoin(userRoot);
        SearchCriteriaContext context = new SearchCriteriaContext(dashboardSearchRequest, criteriaBuilder, userRoot, departmentJoin, jobJoin, new ArrayList<>());
        buildPredicates(context);
        buildSelect(criteriaQuery, criteriaBuilder, userRoot, departmentJoin, jobJoin);
        criteriaQuery.where(context.predicates().toArray(new Predicate[0]));
        criteriaQuery.distinct(true);

        return em.createQuery(criteriaQuery).getResultList();
    }

    private Join<User, Department> createDepartmentJoin(Root<User> userRoot) {
        return userRoot.join("department", JoinType.LEFT);
    }
    private Join<User, Job> createJobJoin(Root<User> userRoot) {
        return userRoot.join("jobs", JoinType.LEFT);
    }

    private void buildPredicates(SearchCriteriaContext context) {
        addLikePredicate(context, context.userRoot().get("email"), context.dashboardSearchRequest().getEmail());
        addLikePredicate(context, context.userRoot().get("phone"), context.dashboardSearchRequest().getPhone());
        addLikePredicate(context, context.userRoot().get("fullName"), context.dashboardSearchRequest().getUserName());
        addLikePredicate(context, context.departmentJoin().get("departmentName"), context.dashboardSearchRequest().getDepartmentName());
        addLikePredicate(context, context.jobJoin().get("title"), context.dashboardSearchRequest().getJobName());
    }

    private void addLikePredicate(SearchCriteriaContext context,Path<String> field,String value) {
        if (value == null || value.isBlank()) {
            return;
        }
        context.predicates().add(
                context.criteriaBuilder().like(
                        context.criteriaBuilder().lower(field),
                        "%" + value.trim().toLowerCase() + "%"
                )
        );
    }
    private void buildSelect(CriteriaQuery<DashboardSearchResponse> criteriaQuery, CriteriaBuilder criteriaBuilder, Root<User> userRoot, Join<User, Department> departmentJoin, Join<User, Job> jobJoin) {
        criteriaQuery.select(criteriaBuilder.construct(
                DashboardSearchResponse.class,
                userRoot.get("id"),
                userRoot.get("fullName"),
                userRoot.get("email"),
                userRoot.get("phone"),
                departmentJoin.get("departmentName"),
                jobJoin.get("id"),
                jobJoin.get("title"),
                jobJoin.get("status")
        ));
    }



//    @Override
//    public Page<DashboardSearchResponse> search(DashboardSearchRequest request) {
//        CriteriaBuilder criteriaBuilder = em.getCriteriaBuilder();
//        CriteriaQuery<Long> countQuery = criteriaBuilder.createQuery(Long.class);
//        Root<User> countRoot = countQuery.from(User.class);
//        Join<User, Department> countDeptJoin = countRoot.join("department", JoinType.LEFT);
//        Join<User, Job> countJobJoin = countRoot.join("jobs", JoinType.LEFT);
//
//        SearchCriteriaContext countContext = new SearchCriteriaContext(
//                request, criteriaBuilder, countRoot, countDeptJoin, countJobJoin, new ArrayList<>());
//        buildPredicates(countContext);
//        countQuery.select(criteriaBuilder.countDistinct(countRoot));
//        countQuery.where(countContext.predicates().toArray(new Predicate[0]));
//        Long totalElements = em.createQuery(countQuery).getSingleResult();
//        if (totalElements == 0) {
//            return new PageImpl<>(new ArrayList<>(), PageRequest.of(request.getPage(), request.getSize()), 0);
//        }
//        CriteriaQuery<DashboardSearchResponse> criteriaQuery = criteriaBuilder.createQuery(DashboardSearchResponse.class);
//        Root<User> userRoot = criteriaQuery.from(User.class);
//        Join<User, Department> departmentJoin = createDepartmentJoin(userRoot);
//        Join<User, Job> jobJoin = createJobJoin(userRoot);
//
//        SearchCriteriaContext dataContext = new SearchCriteriaContext(
//                request, criteriaBuilder, userRoot, departmentJoin, jobJoin, new ArrayList<>());
//        buildPredicates(dataContext);
//        buildSelect(criteriaQuery, criteriaBuilder, userRoot, departmentJoin, jobJoin);
//        criteriaQuery.where(dataContext.predicates().toArray(new Predicate[0]));
//        criteriaQuery.distinct(true);
//
//        int firstResult = request.getPage() * request.getSize();
//        List<DashboardSearchResponse> content = em.createQuery(criteriaQuery)
//                .setFirstResult(firstResult)
//                .setMaxResults(request.getSize())
//                .getResultList();
//        Pageable pageable = PageRequest.of(request.getPage(), request.getSize());
//        return new PageImpl<>(content, pageable, totalElements);
//    }
}